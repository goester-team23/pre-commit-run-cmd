import subprocess
import sys


def main() -> None:
    cmd = sys.argv[1:]

    if not cmd:
        print('No command given, please provide some args')
        print('See: https://pre-commit.com/#pre-commit-configyaml---hooks')
        sys.exit(1)

    result = subprocess.run(cmd)

    if result.returncode != 0:
        sys.exit(1)


def run() -> None:
    main()


if __name__ == "__main__":
    run()
