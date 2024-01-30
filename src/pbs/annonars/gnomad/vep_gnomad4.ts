// @generated by protobuf-ts 2.9.3 with parameter keep_enum_prefix
// @generated from protobuf file "annonars/gnomad/vep_gnomad4.proto" (package "annonars.gnomad.vep_gnomad4", syntax proto3)
// tslint:disable
//
// Protocol buffer definitions for gnomAD v4 VEP records.
//
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import type { PartialMessage } from '@protobuf-ts/runtime'
import { reflectionMergePartial } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'

import { Domain } from './vep_common'

/**
 * Protocol buffer for the gnomAD-nuclear VEP predictions.
 *
 * @generated from protobuf message annonars.gnomad.vep_gnomad4.Vep
 */
export interface Vep {
  /**
   * Allele of record.
   *
   * @generated from protobuf field: string allele = 1;
   */
  allele: string
  /**
   * Consequence, e.g., `"missense_variant"`.
   *
   * @generated from protobuf field: string consequence = 2;
   */
  consequence: string
  /**
   * Impact, e.g., `"MODERATE"`.
   *
   * @generated from protobuf field: string impact = 3;
   */
  impact: string
  /**
   * Gene symbol, e.g., `"PCSK9"`.
   *
   * @generated from protobuf field: string symbol = 4;
   */
  symbol: string
  /**
   * Gene ID, `e.g., "ENSG00000169174"`.
   *
   * @generated from protobuf field: string gene = 5;
   */
  gene: string
  /**
   * Feature type, e.g., `"Transcript"`.
   *
   * @generated from protobuf field: string feature_type = 6;
   */
  featureType: string
  /**
   * Feature ID, e.g., `"ENST00000302118"`.
   *
   * @generated from protobuf field: string feature = 7;
   */
  feature: string
  /**
   * Feature biotype, e.g., `"protein_coding"`.
   *
   * @generated from protobuf field: string feature_biotype = 8;
   */
  featureBiotype: string
  /**
   * Ranked exon number, e.g., `"1/4"`.
   *
   * @generated from protobuf field: optional string exon = 9;
   */
  exon?: string
  /**
   * Ranked intron number, e.g., `"1/4"`.
   *
   * @generated from protobuf field: optional string intron = 10;
   */
  intron?: string
  /**
   * cDNA position, e.g., `"ENST00000302118.5:c.89C>G"`.
   *
   * @generated from protobuf field: optional string hgvsc = 11;
   */
  hgvsc?: string
  /**
   * Protein position, e.g., `"ENSP00000302118.5:p.Thr30Arg"`.
   *
   * @generated from protobuf field: optional string hgvsp = 12;
   */
  hgvsp?: string
  /**
   * cDNA position, e.g., `"89/1863"`.
   *
   * @generated from protobuf field: optional string cdna_position = 13;
   */
  cdnaPosition?: string
  /**
   * CDS position, e.g., `"89/1863"`.
   *
   * @generated from protobuf field: optional string cds_position = 14;
   */
  cdsPosition?: string
  /**
   * Protein position, e.g., `"30/620"`.
   *
   * @generated from protobuf field: optional string protein_position = 15;
   */
  proteinPosition?: string
  /**
   * Amino acids, e.g., `"T/R"`.
   *
   * @generated from protobuf field: optional string amino_acids = 16;
   */
  aminoAcids?: string
  /**
   * Codons, e.g., `"gCg/gGg"`.
   *
   * @generated from protobuf field: optional string codons = 17;
   */
  codons?: string
  /**
   * Allele count.
   *
   * @generated from protobuf field: optional int32 allele_num = 18;
   */
  alleleNum?: number
  /**
   * Distance output of VEP.
   *
   * @generated from protobuf field: optional string distance = 19;
   */
  distance?: string
  /**
   * Strand, e.g., `"1"`.
   *
   * @generated from protobuf field: optional string strand = 20;
   */
  strand?: string
  /**
   * Flags
   *
   * @generated from protobuf field: optional string flags = 21;
   */
  flags?: string
  /**
   * Variant class, e.g., `"SNV"`.
   *
   * @generated from protobuf field: optional string variant_class = 22;
   */
  variantClass?: string
  /**
   * Symbol source, e.g., `"HGNC"`.
   *
   * @generated from protobuf field: optional string symbol_source = 23;
   */
  symbolSource?: string
  /**
   * HGNC ID, e.g., `"HGNC:8706"`.
   *
   * @generated from protobuf field: optional string hgnc_id = 24;
   */
  hgncId?: string
  /**
   * Whether this is the canonical transcript.
   *
   * @generated from protobuf field: optional bool canonical = 25;
   */
  canonical?: boolean
  /**
   * Presence in MANE Select
   *
   * @generated from protobuf field: optional bool mane_select = 26;
   */
  maneSelect?: boolean
  /**
   * Presence in MANE Plus Clinical
   *
   * @generated from protobuf field: optional bool mane_plus_clinical = 27;
   */
  manePlusClinical?: boolean
  /**
   * Transcript support level, e.g., `"1"`.
   *
   * @generated from protobuf field: optional int32 tsl = 28;
   */
  tsl?: number
  /**
   * APPRIS annotation, e.g. `"P1"`.
   *
   * @generated from protobuf field: optional string appris = 29;
   */
  appris?: string
  /**
   * CCDS ID, e.g., `"CCDS30547.1"`.
   *
   * @generated from protobuf field: optional string ccds = 30;
   */
  ccds?: string
  /**
   * Ensembl protein ID, e.g., `"ENSP00000302118"`.
   *
   * @generated from protobuf field: optional string ensp = 31;
   */
  ensp?: string
  /**
   * Uniprot isoform.
   *
   * @generated from protobuf field: optional string uniprot_isoform = 32;
   */
  uniprotIsoform?: string
  /**
   * Value of VEP "SOURCE" field.
   *
   * @generated from protobuf field: optional string source = 33;
   */
  source?: string
  /**
   * Protein domains, e.g., `[["2p4e", "ENSP_mappings"], ["2qtw", "ENSP_mappings"]]`.
   *
   * @generated from protobuf field: repeated annonars.gnomad.vep_common.Domain domains = 34;
   */
  domains: Domain[]
  /**
   * miRNA information.
   *
   * @generated from protobuf field: optional string mirna = 35;
   */
  mirna?: string
  /**
   * HGVS offset.
   *
   * @generated from protobuf field: optional string hgvs_offset = 36;
   */
  hgvsOffset?: string
  /**
   * PubMed IDs
   *
   * @generated from protobuf field: optional string pubmed = 37;
   */
  pubmed?: string
  /**
   * Motif name.
   *
   * @generated from protobuf field: optional string motif_name = 38;
   */
  motifName?: string
  /**
   * Motif name.
   *
   * @generated from protobuf field: optional string motif_pos = 39;
   */
  motifPos?: string
  /**
   * "high inf pos" from VEP.
   *
   * @generated from protobuf field: optional string high_inf_pos = 40;
   */
  highInfPos?: string
  /**
   * Motif score change.
   *
   * @generated from protobuf field: optional string motif_score_change = 41;
   */
  motifScoreChange?: string
  /**
   * Transcription factors.
   *
   * @generated from protobuf field: optional string transcription_factors = 42;
   */
  transcriptionFactors?: string
  /**
   * Loss of function prediction.
   *
   * @generated from protobuf field: optional string lof = 43;
   */
  lof?: string
  /**
   * Loss of function filter.
   *
   * @generated from protobuf field: optional string lof_filter = 44;
   */
  lofFilter?: string
  /**
   * Loss of function flags.
   *
   * @generated from protobuf field: optional string lof_flags = 45;
   */
  lofFlags?: string
  /**
   * Loss of function info.
   *
   * @generated from protobuf field: optional string lof_info = 46;
   */
  lofInfo?: string
}
// @generated message type with reflection information, may provide speed optimized methods
class Vep$Type extends MessageType<Vep> {
  constructor() {
    super('annonars.gnomad.vep_gnomad4.Vep', [
      { no: 1, name: 'allele', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'consequence', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: 'impact', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: 'symbol', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: 'gene', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 6, name: 'feature_type', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 7, name: 'feature', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 8, name: 'feature_biotype', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 9, name: 'exon', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 10, name: 'intron', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 11, name: 'hgvsc', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 12, name: 'hgvsp', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 13, name: 'cdna_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 14, name: 'cds_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 15, name: 'protein_position', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 16, name: 'amino_acids', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 17, name: 'codons', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 18, name: 'allele_num', kind: 'scalar', opt: true, T: 5 /*ScalarType.INT32*/ },
      { no: 19, name: 'distance', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 20, name: 'strand', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 21, name: 'flags', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 22, name: 'variant_class', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 23, name: 'symbol_source', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 24, name: 'hgnc_id', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 25, name: 'canonical', kind: 'scalar', opt: true, T: 8 /*ScalarType.BOOL*/ },
      { no: 26, name: 'mane_select', kind: 'scalar', opt: true, T: 8 /*ScalarType.BOOL*/ },
      { no: 27, name: 'mane_plus_clinical', kind: 'scalar', opt: true, T: 8 /*ScalarType.BOOL*/ },
      { no: 28, name: 'tsl', kind: 'scalar', opt: true, T: 5 /*ScalarType.INT32*/ },
      { no: 29, name: 'appris', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 30, name: 'ccds', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 31, name: 'ensp', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 32, name: 'uniprot_isoform', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 33, name: 'source', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      {
        no: 34,
        name: 'domains',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Domain
      },
      { no: 35, name: 'mirna', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 36, name: 'hgvs_offset', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 37, name: 'pubmed', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 38, name: 'motif_name', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 39, name: 'motif_pos', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 40, name: 'high_inf_pos', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 41, name: 'motif_score_change', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      {
        no: 42,
        name: 'transcription_factors',
        kind: 'scalar',
        opt: true,
        T: 9 /*ScalarType.STRING*/
      },
      { no: 43, name: 'lof', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 44, name: 'lof_filter', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 45, name: 'lof_flags', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ },
      { no: 46, name: 'lof_info', kind: 'scalar', opt: true, T: 9 /*ScalarType.STRING*/ }
    ])
  }
  create(value?: PartialMessage<Vep>): Vep {
    const message = globalThis.Object.create(this.messagePrototype!)
    message.allele = ''
    message.consequence = ''
    message.impact = ''
    message.symbol = ''
    message.gene = ''
    message.featureType = ''
    message.feature = ''
    message.featureBiotype = ''
    message.domains = []
    if (value !== undefined) reflectionMergePartial<Vep>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Vep
  ): Vep {
    const message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      const [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string allele */ 1:
          message.allele = reader.string()
          break
        case /* string consequence */ 2:
          message.consequence = reader.string()
          break
        case /* string impact */ 3:
          message.impact = reader.string()
          break
        case /* string symbol */ 4:
          message.symbol = reader.string()
          break
        case /* string gene */ 5:
          message.gene = reader.string()
          break
        case /* string feature_type */ 6:
          message.featureType = reader.string()
          break
        case /* string feature */ 7:
          message.feature = reader.string()
          break
        case /* string feature_biotype */ 8:
          message.featureBiotype = reader.string()
          break
        case /* optional string exon */ 9:
          message.exon = reader.string()
          break
        case /* optional string intron */ 10:
          message.intron = reader.string()
          break
        case /* optional string hgvsc */ 11:
          message.hgvsc = reader.string()
          break
        case /* optional string hgvsp */ 12:
          message.hgvsp = reader.string()
          break
        case /* optional string cdna_position */ 13:
          message.cdnaPosition = reader.string()
          break
        case /* optional string cds_position */ 14:
          message.cdsPosition = reader.string()
          break
        case /* optional string protein_position */ 15:
          message.proteinPosition = reader.string()
          break
        case /* optional string amino_acids */ 16:
          message.aminoAcids = reader.string()
          break
        case /* optional string codons */ 17:
          message.codons = reader.string()
          break
        case /* optional int32 allele_num */ 18:
          message.alleleNum = reader.int32()
          break
        case /* optional string distance */ 19:
          message.distance = reader.string()
          break
        case /* optional string strand */ 20:
          message.strand = reader.string()
          break
        case /* optional string flags */ 21:
          message.flags = reader.string()
          break
        case /* optional string variant_class */ 22:
          message.variantClass = reader.string()
          break
        case /* optional string symbol_source */ 23:
          message.symbolSource = reader.string()
          break
        case /* optional string hgnc_id */ 24:
          message.hgncId = reader.string()
          break
        case /* optional bool canonical */ 25:
          message.canonical = reader.bool()
          break
        case /* optional bool mane_select */ 26:
          message.maneSelect = reader.bool()
          break
        case /* optional bool mane_plus_clinical */ 27:
          message.manePlusClinical = reader.bool()
          break
        case /* optional int32 tsl */ 28:
          message.tsl = reader.int32()
          break
        case /* optional string appris */ 29:
          message.appris = reader.string()
          break
        case /* optional string ccds */ 30:
          message.ccds = reader.string()
          break
        case /* optional string ensp */ 31:
          message.ensp = reader.string()
          break
        case /* optional string uniprot_isoform */ 32:
          message.uniprotIsoform = reader.string()
          break
        case /* optional string source */ 33:
          message.source = reader.string()
          break
        case /* repeated annonars.gnomad.vep_common.Domain domains */ 34:
          message.domains.push(Domain.internalBinaryRead(reader, reader.uint32(), options))
          break
        case /* optional string mirna */ 35:
          message.mirna = reader.string()
          break
        case /* optional string hgvs_offset */ 36:
          message.hgvsOffset = reader.string()
          break
        case /* optional string pubmed */ 37:
          message.pubmed = reader.string()
          break
        case /* optional string motif_name */ 38:
          message.motifName = reader.string()
          break
        case /* optional string motif_pos */ 39:
          message.motifPos = reader.string()
          break
        case /* optional string high_inf_pos */ 40:
          message.highInfPos = reader.string()
          break
        case /* optional string motif_score_change */ 41:
          message.motifScoreChange = reader.string()
          break
        case /* optional string transcription_factors */ 42:
          message.transcriptionFactors = reader.string()
          break
        case /* optional string lof */ 43:
          message.lof = reader.string()
          break
        case /* optional string lof_filter */ 44:
          message.lofFilter = reader.string()
          break
        case /* optional string lof_flags */ 45:
          message.lofFlags = reader.string()
          break
        case /* optional string lof_info */ 46:
          message.lofInfo = reader.string()
          break
        default:
          const u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          const d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: Vep,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string allele = 1; */
    if (message.allele !== '') writer.tag(1, WireType.LengthDelimited).string(message.allele)
    /* string consequence = 2; */
    if (message.consequence !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.consequence)
    /* string impact = 3; */
    if (message.impact !== '') writer.tag(3, WireType.LengthDelimited).string(message.impact)
    /* string symbol = 4; */
    if (message.symbol !== '') writer.tag(4, WireType.LengthDelimited).string(message.symbol)
    /* string gene = 5; */
    if (message.gene !== '') writer.tag(5, WireType.LengthDelimited).string(message.gene)
    /* string feature_type = 6; */
    if (message.featureType !== '')
      writer.tag(6, WireType.LengthDelimited).string(message.featureType)
    /* string feature = 7; */
    if (message.feature !== '') writer.tag(7, WireType.LengthDelimited).string(message.feature)
    /* string feature_biotype = 8; */
    if (message.featureBiotype !== '')
      writer.tag(8, WireType.LengthDelimited).string(message.featureBiotype)
    /* optional string exon = 9; */
    if (message.exon !== undefined) writer.tag(9, WireType.LengthDelimited).string(message.exon)
    /* optional string intron = 10; */
    if (message.intron !== undefined)
      writer.tag(10, WireType.LengthDelimited).string(message.intron)
    /* optional string hgvsc = 11; */
    if (message.hgvsc !== undefined) writer.tag(11, WireType.LengthDelimited).string(message.hgvsc)
    /* optional string hgvsp = 12; */
    if (message.hgvsp !== undefined) writer.tag(12, WireType.LengthDelimited).string(message.hgvsp)
    /* optional string cdna_position = 13; */
    if (message.cdnaPosition !== undefined)
      writer.tag(13, WireType.LengthDelimited).string(message.cdnaPosition)
    /* optional string cds_position = 14; */
    if (message.cdsPosition !== undefined)
      writer.tag(14, WireType.LengthDelimited).string(message.cdsPosition)
    /* optional string protein_position = 15; */
    if (message.proteinPosition !== undefined)
      writer.tag(15, WireType.LengthDelimited).string(message.proteinPosition)
    /* optional string amino_acids = 16; */
    if (message.aminoAcids !== undefined)
      writer.tag(16, WireType.LengthDelimited).string(message.aminoAcids)
    /* optional string codons = 17; */
    if (message.codons !== undefined)
      writer.tag(17, WireType.LengthDelimited).string(message.codons)
    /* optional int32 allele_num = 18; */
    if (message.alleleNum !== undefined) writer.tag(18, WireType.Varint).int32(message.alleleNum)
    /* optional string distance = 19; */
    if (message.distance !== undefined)
      writer.tag(19, WireType.LengthDelimited).string(message.distance)
    /* optional string strand = 20; */
    if (message.strand !== undefined)
      writer.tag(20, WireType.LengthDelimited).string(message.strand)
    /* optional string flags = 21; */
    if (message.flags !== undefined) writer.tag(21, WireType.LengthDelimited).string(message.flags)
    /* optional string variant_class = 22; */
    if (message.variantClass !== undefined)
      writer.tag(22, WireType.LengthDelimited).string(message.variantClass)
    /* optional string symbol_source = 23; */
    if (message.symbolSource !== undefined)
      writer.tag(23, WireType.LengthDelimited).string(message.symbolSource)
    /* optional string hgnc_id = 24; */
    if (message.hgncId !== undefined)
      writer.tag(24, WireType.LengthDelimited).string(message.hgncId)
    /* optional bool canonical = 25; */
    if (message.canonical !== undefined) writer.tag(25, WireType.Varint).bool(message.canonical)
    /* optional bool mane_select = 26; */
    if (message.maneSelect !== undefined) writer.tag(26, WireType.Varint).bool(message.maneSelect)
    /* optional bool mane_plus_clinical = 27; */
    if (message.manePlusClinical !== undefined)
      writer.tag(27, WireType.Varint).bool(message.manePlusClinical)
    /* optional int32 tsl = 28; */
    if (message.tsl !== undefined) writer.tag(28, WireType.Varint).int32(message.tsl)
    /* optional string appris = 29; */
    if (message.appris !== undefined)
      writer.tag(29, WireType.LengthDelimited).string(message.appris)
    /* optional string ccds = 30; */
    if (message.ccds !== undefined) writer.tag(30, WireType.LengthDelimited).string(message.ccds)
    /* optional string ensp = 31; */
    if (message.ensp !== undefined) writer.tag(31, WireType.LengthDelimited).string(message.ensp)
    /* optional string uniprot_isoform = 32; */
    if (message.uniprotIsoform !== undefined)
      writer.tag(32, WireType.LengthDelimited).string(message.uniprotIsoform)
    /* optional string source = 33; */
    if (message.source !== undefined)
      writer.tag(33, WireType.LengthDelimited).string(message.source)
    /* repeated annonars.gnomad.vep_common.Domain domains = 34; */
    for (let i = 0; i < message.domains.length; i++)
      Domain.internalBinaryWrite(
        message.domains[i],
        writer.tag(34, WireType.LengthDelimited).fork(),
        options
      ).join()
    /* optional string mirna = 35; */
    if (message.mirna !== undefined) writer.tag(35, WireType.LengthDelimited).string(message.mirna)
    /* optional string hgvs_offset = 36; */
    if (message.hgvsOffset !== undefined)
      writer.tag(36, WireType.LengthDelimited).string(message.hgvsOffset)
    /* optional string pubmed = 37; */
    if (message.pubmed !== undefined)
      writer.tag(37, WireType.LengthDelimited).string(message.pubmed)
    /* optional string motif_name = 38; */
    if (message.motifName !== undefined)
      writer.tag(38, WireType.LengthDelimited).string(message.motifName)
    /* optional string motif_pos = 39; */
    if (message.motifPos !== undefined)
      writer.tag(39, WireType.LengthDelimited).string(message.motifPos)
    /* optional string high_inf_pos = 40; */
    if (message.highInfPos !== undefined)
      writer.tag(40, WireType.LengthDelimited).string(message.highInfPos)
    /* optional string motif_score_change = 41; */
    if (message.motifScoreChange !== undefined)
      writer.tag(41, WireType.LengthDelimited).string(message.motifScoreChange)
    /* optional string transcription_factors = 42; */
    if (message.transcriptionFactors !== undefined)
      writer.tag(42, WireType.LengthDelimited).string(message.transcriptionFactors)
    /* optional string lof = 43; */
    if (message.lof !== undefined) writer.tag(43, WireType.LengthDelimited).string(message.lof)
    /* optional string lof_filter = 44; */
    if (message.lofFilter !== undefined)
      writer.tag(44, WireType.LengthDelimited).string(message.lofFilter)
    /* optional string lof_flags = 45; */
    if (message.lofFlags !== undefined)
      writer.tag(45, WireType.LengthDelimited).string(message.lofFlags)
    /* optional string lof_info = 46; */
    if (message.lofInfo !== undefined)
      writer.tag(46, WireType.LengthDelimited).string(message.lofInfo)
    const u = options.writeUnknownFields
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer)
    return writer
  }
}
/**
 * @generated MessageType for protobuf message annonars.gnomad.vep_gnomad4.Vep
 */
export const Vep = new Vep$Type()
