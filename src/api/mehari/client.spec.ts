import fs from 'fs'
import path from 'path'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'

import { SeqvarImpl } from '../../lib/genomicVars'
import { LinearStrucvarImpl } from '../../lib/genomicVars'
import { MehariClient } from './client'
import { SeqvarResult, StrucvarResult } from './types'

/** Fixture Seqvar */
const seqvar = new SeqvarImpl('grch37', '1', 123, 'A', 'G')

/** Fixture with BRCA1 seqvar consequence. */
const seqvarCsqResponseBrca1 = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './fixture.seqvarCsqResponse.BRCA1.json'), 'utf8')
)

/** Fixture Strucvar affecting BRCA1 */
const strucvar = new LinearStrucvarImpl('DEL', 'grch37', 'chr17', 43044295, 43044297)

/** Fixture with strucvar (BRCA1) consequence */
const strucvarCsqResponseBrca1 = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './fixture.strucvarCsqResponse.BRCA1.json'), 'utf8')
)

/** Initialize mock for `fetch()`. */
const fetchMocker = createFetchMock(vi)

describe.concurrent('MehariClient/seqvar', () => {
  beforeEach(() => {
    fetchMocker.enableMocks()
    fetchMocker.resetMocks()
  })

  it('fetches TxCsq info correctly', async () => {
    // arrange:
    fetchMocker.mockResponseOnce(JSON.stringify(seqvarCsqResponseBrca1))

    // act:
    const client = new MehariClient()
    const result = await client.retrieveSeqvarsCsq(seqvar, 'HGNC:1100')

    // assert:
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(SeqvarResult.fromJson(seqvarCsqResponseBrca1))
    )
  })

  it('fetches TxCsq info correctly without HGNC id', async () => {
    // arrange:
    fetchMocker.mockResponseOnce(JSON.stringify(seqvarCsqResponseBrca1))

    // act:
    const client = new MehariClient()
    const result = await client.retrieveSeqvarsCsq(seqvar)

    // assert:
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(SeqvarResult.fromJson(seqvarCsqResponseBrca1))
    )
  })

  it('fails to fetch variant info with wrong variant', async () => {
    // arrange:
    const seqVarInvalid = new SeqvarImpl('grch37', '1', 123, 'A', 'T')
    fetchMocker.mockResponse((req) => {
      if (req.url.includes('alternative=G')) {
        return Promise.resolve(JSON.stringify(seqvarCsqResponseBrca1))
      }
      return Promise.reject('failed to fetch seqvar')
    })

    // act:
    const client = new MehariClient()
    // (with guard)
    await expect(async () => await client.retrieveSeqvarsCsq(seqVarInvalid)).rejects.toThrow(
      'failed to fetch seqvar'
    )

    // assert:
  })
})

describe.concurrent('MehariClient/strucvar', () => {
  beforeEach(() => {
    fetchMocker.enableMocks()
    fetchMocker.resetMocks()
  })

  it('fetches strucvar info correctly', async () => {
    // arrange:
    fetchMocker.mockResponseOnce(JSON.stringify(strucvarCsqResponseBrca1))

    // act:
    const client = new MehariClient()
    const result = await client.retrieveStrucvarsCsq(strucvar)

    // assert:
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(StrucvarResult.fromJson(strucvarCsqResponseBrca1))
    )
  })

  it('fails to fetch variant info with wrong variant', async () => {
    // arrange:
    const strucVarInvalid = new LinearStrucvarImpl('DUP', 'grch37', 'chr17', 43044295, 43044297)
    fetchMocker.mockResponse((req) => {
      if (req.url.includes('DEL')) {
        return Promise.resolve(JSON.stringify(strucvarCsqResponseBrca1))
      }
      return Promise.reject('failed to fetch strucvar')
    })

    // act:
    const client = new MehariClient()
    // (with guard)
    await expect(async () => await client.retrieveStrucvarsCsq(strucVarInvalid)).rejects.toThrow(
      'failed to fetch strucvar'
    )

    // assert:
  })
})
