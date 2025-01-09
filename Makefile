.PHONY: dev
dev:
	bun run dev

# tasks
.PHONY: install
install: clean-node
	bun install

.PHONY: build
build: clean-build
	bun run build

.PHONY: vet
vet:
	bun run lint && bun run format

# clean
.PHONY: clean
clean: clean-node clean-build
	@echo "Cleaned all node_modules, build artifacts, and lock files."

.PHONY: clean-node
clean-node:
	find . -type f \( -name "bun.lockb" -o -name "yarn.lock" -o -name "package-lock.json" \) -exec rm -f {} +
	find . -type d \( -name "node_modules" \) -exec rm -rf {} +
	@echo "Cleaned all lock files and node_modules."

.PHONY: clean-build
clean-build:
	find . -type d \( -name ".next" -o -name ".turbo" -o -name ".vercel" \) -exec rm -rf {} +
	@echo "Cleaned all build artifacts (.next, .turbo, .vercel)."