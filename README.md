# DMS Pattern

A role 'dms-vpc-role' needs to be created and the AmazonDMSVPCManagementRole policy attached to it.

# Useful commands

Initialize the project:
```
npx projen
```

Run the linter:
```
npm run eslint
```

For a secret whose identity you assign to SecretsManagerSecretId, enter the following JSON structure:
{
  "username": db_username,
  "password": db_user_password,
  "port": db_port_number,
  "host": db_server_name
}
