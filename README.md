# pre-commit-run-cmd

**WORK IN PROGRESS**

## Idea:

Run any commands in the environment `pre-commit` provides. Use `additional_dependencies`
to define the dependencies you need and the `args` to define the command you want to run.

Example config showing this:

```yaml
repos:
  - repo: https://github.com/ddanier/pre-commit-run-cmd.git
    rev: v0.1.0
    hooks:
      - id: run-python
        name: "flake8"
        args: ["flake8"]
        additional_dependencies:
          - flake8
        types: [python]
  - repo: https://github.com/ddanier/pre-commit-run-cmd.git
    rev: v0.1.0
    hooks:
      - id: run-node
        name: "eslint"
        args: ["eslint"]
        additional_dependencies:
          - eslint
        types: [javascript]
```

**Note:** Currently only `python` and `node` are supported.

## Feature ideas

* Allow to change current working directory.
* Support more languages.