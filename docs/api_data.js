define({ "api": [
  {
    "type": "get",
    "url": "/api/auth/token_test",
    "title": "1.2 - Dummy display a Refresh Token",
    "name": "DisplayToken",
    "group": "Authentication",
    "description": "<p>Test function used to display the token generated after the steam login. This must not be used in production, but only as a token displayer in dev.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The refresh token to display.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The refresh token displayed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/routes/auth.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/auth/token",
    "title": "2 - Get a Auth Token from a Refresh Token",
    "name": "GetAuthToken",
    "group": "Authentication",
    "description": "<p>Refresh tokens are long lived but auth tokens are long lived. Using a valid refresh token, this api delivers an auth token to access data endpoints.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer &lt;refresh_token&gt;'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Authentication token short lived to access data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Errors": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "NoRefreshToken",
            "description": "<p>There is no refresh token provided.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "ExpiredRefreshToken",
            "description": "<p>Refresh token has expired and user should log again.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "InvalidRefreshToken",
            "description": "<p>Token is invalid (decode, rights, signature...).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/routes/auth.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/auth/login",
    "title": "1.1 - Get a Refresh Token with Steam Login",
    "name": "GetRefreshToken",
    "group": "Authentication",
    "description": "<p>Calling this endpoint redirects to the steam login page. After login, the user is redirected to a callback url with the refresh token as a parameter. The URL is defined in the backend config.</p>",
    "version": "0.0.0",
    "filename": "backend/routes/auth.py",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/api/user/details",
    "title": "GetUserDetails",
    "name": "GetUserDetails",
    "group": "User",
    "description": "<p>This method returns multiple information about a user that logged at least one time.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>SteamID (64bits) of the user to request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>SteamID (64bits)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Errors": [
          {
            "group": "Errors",
            "type": "String",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>There is no user in the database with this id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/routes/user.py",
    "groupTitle": "User"
  }
] });