# dpc-bootstrap

dpc-bootstrap is a collection of helpful sass files to get your project up and running quickly.

- Abstracts away the repetitive chunks of code that you use between different files.
- Caters for different project structures out the box.
- Completely customisable and extendable to suit your own projects.

## Examples

### Centering an element

Instead of:

```scss
.myClass {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

Just use:

```scss
.myClass {
  @include center-self;
}
```

### Pseudo selectors

Instead of:

```scss
.anotherClass {
  position: relative;

  &::after {
    position: absolute;
    content: '';
    // Your code
  }
}
```

Just use:

```scss
.anotherClass {
  @include pseudo(after) {
    // Your code
  }
}
```

## How to use it

Get started by installing the package globally using `npm install -g dpc-bootstrap`.

If installing in to an Angular project:

1. Make sure you are in the root of the Angular project, then in the command line run `dpc-bootstrap sass`
2. You will be presented with a list of options, choose `Angular` and it will install the files in the `src/assets/styles` folder.

> WARNING: If you have any files or folders in this directory already, they may be replaced if their naming collides with the naming of the files in this package. To avoid this, follow the installation instructions for all other projects and then move it safely in to the desired folder.

3. To use any of the variables or mixins in an Angular component, you must include the following line at the top of the `.scss` file:

```scss
@import 'src/assets/styles/themes';
```

Installation to any other project:

1. In the command line, navigate to the folder that you want the files to be installed to.
2. Run `dpc bootstrap sass`, and choose `Default` from the displayed options.
3. Add an import to your main `.scss` file for the project.

> NOTE: If you want to use the index sass file as your primary sass file, remove the underscore from the file name.
