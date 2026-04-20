# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please email the maintainers directly. Do not open a public issue.

## Security Measures

### Dependency Management
- Run `npm audit` regularly to check for vulnerabilities
- Keep dependencies up to date with `npm update`
- Use `npm audit fix` to automatically fix vulnerabilities where possible

### Automated Checks
- GitHub Actions runs `npm audit` on every push
- Dependabot is enabled for automatic dependency updates
- CodeQL scanning for code-level vulnerabilities

### Best Practices
- Never commit secrets, API keys, or credentials to the repository
- Use environment variables for sensitive configuration
- Keep Node.js and npm up to date
- Follow the principle of least privilege for access control

## Security Updates

Security updates are released as soon as possible after a vulnerability is discovered and confirmed.
