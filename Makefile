SHELL := bash -euo pipefail

.PHONY: help
help:
	@echo "Usage: make <target>"
	@echo
	@echo "Targets:"
	@echo "  help        This help (default target)"
	@echo "  deps        Install all dependencies"
	@echo "  format      Format source code"
	@echo "  lint        Run lint checks"
	@echo "  test        Run tests (no watch)"
	@echo "  test-ci     Run tests (no watch) for CI (with coverage, single-threaded)"
	@echo "  test-nocov  Run tests (no watch) without coverage"
	@echo "  proto-fetch Fetch protobuf files"
	@echo "  proto-ts    Generate .ts from .proto files"
	@echo "  proto	     Fetch, generate, and format .ts from .proto files"
	@echo "  test-w      Run tests (watch)"
	@echo "  ci          Install dependencies, run lints and tests"
	@echo "  serve       Run the Storybook server"

.PHONY: deps
deps:
	npm install --include=dev

.PHONY: format
format:
	npm run format

.PHONY: lint
lint:
	npm run lint
	npm run type-check
	npm run format:check

.PHONY: test
test:
	npm run -- test:unit --run

# Tests in the CI are forced into a single thread as the worker only has
# two cores only and some tests run into timeouts otherwise.
.PHONY: test-ci
test-ci:
	npm run -- test:unit --run --poolOptions.threads.maxThreads=1 --poolOptions.threads.minThreads=1

.PHONY: test-nocov
test-nocov:
	npm run -- test:unit:nocov --run

.PHONY: test-w
test-w:
	npm run -- test:unit

.PHONY: ci
ci: \
	deps \
	lint \
	test

.PHONY: serve
serve:
	npm run storybook

.PHONY: serve-public
serve-public:
	npm run storybook -- --host=0.0.0.0

PROTO_BASE := https://raw.githubusercontent.com/varfish-org/annonars/main

.PHONY: proto-fetch
proto-fetch:
	mkdir -p protos/annonars/{clinvar,cons,dbsnp,functional,genes,gnomad,helixmtdb,regions}
	wget -O protos/annonars/clinvar/minimal.proto $(PROTO_BASE)/protos/annonars/clinvar/minimal.proto
	wget -O protos/annonars/clinvar/per_gene.proto $(PROTO_BASE)/protos/annonars/clinvar/per_gene.proto
	wget -O protos/annonars/clinvar/sv.proto $(PROTO_BASE)/protos/annonars/clinvar/sv.proto
	wget -O protos/annonars/cons/base.proto $(PROTO_BASE)/protos/annonars/cons/base.proto
	wget -O protos/annonars/dbsnp/base.proto $(PROTO_BASE)/protos/annonars/dbsnp/base.proto
	wget -O protos/annonars/functional/refseq.proto $(PROTO_BASE)/protos/annonars/functional/refseq.proto
	wget -O protos/annonars/gnomad/exac_cnv.proto $(PROTO_BASE)/protos/annonars/gnomad/exac_cnv.proto
	wget -O protos/annonars/gnomad/gnomad2.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad2.proto
	wget -O protos/annonars/gnomad/gnomad3.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad3.proto
	wget -O protos/annonars/gnomad/gnomad4.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad4.proto
	wget -O protos/annonars/gnomad/gnomad_cnv4.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad_cnv4.proto
	wget -O protos/annonars/gnomad/gnomad_sv2.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad_sv2.proto
	wget -O protos/annonars/gnomad/gnomad_sv4.proto $(PROTO_BASE)/protos/annonars/gnomad/gnomad_sv4.proto
	wget -O protos/annonars/gnomad/mtdna.proto $(PROTO_BASE)/protos/annonars/gnomad/mtdna.proto
	wget -O protos/annonars/gnomad/vep_common.proto $(PROTO_BASE)/protos/annonars/gnomad/vep_common.proto
	wget -O protos/annonars/gnomad/vep_gnomad2.proto $(PROTO_BASE)/protos/annonars/gnomad/vep_gnomad2.proto
	wget -O protos/annonars/gnomad/vep_gnomad3.proto $(PROTO_BASE)/protos/annonars/gnomad/vep_gnomad3.proto
	wget -O protos/annonars/gnomad/vep_gnomad4.proto $(PROTO_BASE)/protos/annonars/gnomad/vep_gnomad4.proto
	wget -O protos/annonars/helixmtdb/base.proto $(PROTO_BASE)/protos/annonars/helixmtdb/base.proto
	wget -O protos/annonars/regions/clingen.proto $(PROTO_BASE)/protos/annonars/regions/clingen.proto

.PHONY: proto-ts
proto-ts:
	mkdir -p src/pbs
	npx protoc --ts_opt keep_enum_prefix --ts_out src/pbs --proto_path protos protos/annonars/*/*.proto

.PHONY: proto
proto: proto-fetch proto-ts format lint
