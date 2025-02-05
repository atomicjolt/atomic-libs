# Atomic Libraries

A collection of NPM packages maintained by Atomic Jolt.

[Documentation can be found here](https://atomicjolt.github.io/atomic-libs/)

## Development

```bash
# Install Dependencies
npm install

# Build all packages
npm run build --workspaces

# Run the playground
npm run playground
```

## Testing

Before running tests, ensure that all packages are built:

```bash
npm run build --workspaces
```

Then, run the tests:

```bash
npm run test --workspaces
```

## Version Management

This repo uses [changsets](https://github.com/changesets/changesets/tree/main) for managing versions. To publish a new version of a package, follow these steps:

### Create a new changeset

Each time that you make meanginful changes to a package, you should create a new changeset. To do this, run the following command:

```bash
npx changeset
```

This will guide you through the process of creating a new changeset.

Once you have created a changeset, you can view it by running the following command:

```bash
npx changeset status
```

### Version

To publish a new version of a package, run the following command:

```bash
npx changeset version
```

This will consume all of the changesets that have been created and bump the versions of the packages accordingly.
Additionally, it will write changelog entries for each package.

### Publish

To publish the new versions of the packages, run the following command:

```bash
npx changeset publish
```

This will loop through all of the packages and publish any that have a newer version than what is on NPM.
