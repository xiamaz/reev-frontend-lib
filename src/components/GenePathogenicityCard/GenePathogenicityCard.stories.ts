import { JsonValue } from '@protobuf-ts/runtime'
import type { Meta, StoryObj } from '@storybook/vue3'

import { Record as GeneInfoRecord } from '../../pbs/annonars/genes/base'
import GenePathogenicityCard from './GenePathogenicityCard.vue'
import geneInfoBrca1Json from './fixture.geneInfo.BRCA1.json'
import geneInfoTgdsJson from './fixture.geneInfo.TGDS.json'

// Here, fixture data is loaded via `import` from JSON file.  Reading the file
// as in the tests fails with "process is not defined" error in the browser.

// @ts-ignore
const geneInfoTgds = GeneInfoRecord.fromJson(geneInfoTgdsJson as JsonValue)
// @ts-ignore
const geneInfoBrca1 = GeneInfoRecord.fromJson(geneInfoBrca1Json as JsonValue)

const meta = {
  title: 'Gene/GenePathogenicityCard',
  component: GenePathogenicityCard,
  tags: ['autodocs'],
  argTypes: {
    geneInfo: { control: { type: 'object' } }
  },
  args: { geneInfo: geneInfoTgds }
} satisfies Meta<typeof GenePathogenicityCard>

export default meta
type Story = StoryObj<typeof meta>

export const TGDS: Story = {
  args: {
    geneInfo: geneInfoTgds
  }
}

export const BRCA1: Story = {
  args: {
    geneInfo: geneInfoBrca1
  }
}

export const UndefinedGeneInfo: Story = {
  args: {
    geneInfo: undefined
  }
}
