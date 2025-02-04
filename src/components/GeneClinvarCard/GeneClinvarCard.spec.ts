import fs from 'fs'
import path from 'path'
import { describe, expect, test } from 'vitest'

import { TranscriptResult } from '../../api/dotty'
import { setupMountedComponents } from '../../lib/testUtils'
import { ClinvarPerGeneRecord } from '../../pbs/annonars/clinvar/per_gene'
import { Record as GeneInfoRecord } from '../../pbs/annonars/genes/base'
import GeneClinvarCard from './GeneClinvarCard.vue'

// Load fixture data for gene TGDS (little data) and BRCA1 (lots of data).
const geneInfoTgds = GeneInfoRecord.fromJsonString(
  fs.readFileSync(
    path.resolve(__dirname, '../GenePathogenicityCard/fixture.geneInfo.TGDS.json'),
    'utf8'
  )
)
const geneInfoBrca1 = GeneInfoRecord.fromJsonString(
  fs.readFileSync(
    path.resolve(__dirname, '../GenePathogenicityCard/fixture.geneInfo.BRCA1.json'),
    'utf8'
  )
)
const clinvarPerGeneTgds = ClinvarPerGeneRecord.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.clinvarPerGene.TGDS.json'), 'utf8')
)
const clinvarPerGeneBrca1 = ClinvarPerGeneRecord.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.clinvarPerGene.BRCA1.json'), 'utf8')
)
const transcriptsTgds37 = TranscriptResult.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.transcripts.TGDS.37.json'), 'utf8')
)
const transcriptsTgds38 = TranscriptResult.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.transcripts.TGDS.38.json'), 'utf8')
)
const transcriptsBrca137 = TranscriptResult.fromJsonString(
  fs.readFileSync(path.resolve(__dirname, './fixture.transcripts.BRCA1.37.json'), 'utf8')
)

describe.concurrent('GeneClinvarCard.vue', async () => {
  test.each([
    ['TGDS', 'grch37', transcriptsTgds37, clinvarPerGeneTgds, geneInfoTgds],
    ['TGDS', 'grch38', transcriptsTgds38, clinvarPerGeneTgds, geneInfoBrca1],
    ['BRCA1', 'grch37', transcriptsBrca137, clinvarPerGeneBrca1, geneInfoBrca1]
  ])(
    'renders the GeneClinvarCard for %s, %s',
    async (
      _geneSymbol: string,
      genomeBuild: string,
      transcripts: TranscriptResult,
      clinvarPerGene: ClinvarPerGeneRecord,
      geneInfo: GeneInfoRecord
    ) => {
      // arrange:
      const { wrapper } = await setupMountedComponents(
        { component: GeneClinvarCard, shallow: true, stubs: { GeneClinvarCard: false } },
        {
          props: {
            clinvarPerGene,
            geneInfo,
            genomeBuild,
            transcripts
          }
        }
      )

      // act: nothing, only test rendering

      // assert:
      expect(wrapper.text()).toContain('ClinVar Information')
      const clinvarImpact = wrapper.findComponent({ name: 'ClinvarImpact' })
      expect(clinvarImpact.exists()).toBe(true)
      const variationLandscape = wrapper.findComponent({ name: 'VariationLandscape' })
      expect(variationLandscape.exists()).toBe(true)
      const clinvarFreqPlot = wrapper.findComponent({ name: 'ClinvarFreqPlot' })
      expect(clinvarFreqPlot.exists()).toBe(true)
    }
  )
})
