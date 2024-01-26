Add config.env with specified variables:
```env
PORT = 3001
PROJECT_ID = '<your-firebase-project-id>'
FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY = '{
  "_comment": "Generate new private key for your service account here https://console.firebase.google.com/u/0/project/your-project-id/settings/serviceaccounts/adminsdk",

  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
  "universe_domain": ""
}'
```

Synchronize environment variable PORT with backend server address and port on client side.

`npm start` to start backend server.