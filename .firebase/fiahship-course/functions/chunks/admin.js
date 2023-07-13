import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "fiahship-course";
const FB_CLIENT_EMAIL = "firebase-adminsdk-e9rnh@fiahship-course.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3btMCvSKcbtSS\nS2y8kdkt6uypN+S/wVt52UDKrrHp0K7P9IqGjzaK28bPXt4W8pnWPGAc/airY8yd\nUZFKIq+jAEjH4ZC4+Bc98Al3aLdDmpclP5/OMTfPqZcZgYIFeuRNTEP14dCNx1hX\nZSR/FX/xvrHl68uH6XCxau/TR4kXyHVzwRs7hKMDttDlRqLVHoJjNYGH2xQLAmZF\nLWuOVOBupjHz7CSd3ltYqP3Vh7bK3Ec8dPQze0nY/OUs/W8pqV4WjDZe8E2Q+gnN\n7ExBVDkUJt602KFdspIsL7PPcv7sPjb6HRXLVksTKL8dndcCM4Nv9tGNZfoeK7F8\nsp9IjAZBAgMBAAECggEADi85N6iAK9WcMCs59NkDENHDoZBAwEfyTBlYhnPSLoZP\nG6X0LP9Cafl1xbphynzRwuch+DabRj7uPH9pZfC0YT1CjjEApnUKIxApQz0V6C86\nSeHszckw4NON63sqyUQIBybYcy6WQyhrnz0jKy/ymAiK1tXlhBSGp4mL6Gwgi0tO\nPSRXx/0Ys7bbeVyR7+CHtBRbkbzI/VqwpAgiRXsrBrs8BXX7KiFgmL/o+gLMi7gC\nr8rLlj5ZLNNsrQQaVDWMubPfGkD/iO5C5kXResZSEJSMwgB3uD4ppIgKIvfb1Bwu\n1KhCa2/tgb1UDP0NHfJcjDg5/oWCDvahpiyK4EeiuwKBgQDrQl2lf1QR1LkQyOqu\nxsK1+yAYhgUTspBOKoNLFTd4eSEZMj7o7frc3+MJtClApwcCg8OgY3w5m2nuxH/W\n//Xq8EpnHVMQy7Mp9C7kanJTL6wl3S/E3HAEA3nrm519wvgYdkqIhKQnMqGCWoIi\nJV71j0tiP+L3AqguLPeBgSiUBwKBgQDHmsZc9S9UC4sy6ULogfrdeZnI6bSomlVA\nIl76t0sHZZt0Gjy7CZEinOHrPmaoqYRw+U9voJVKMFwE8Uuo9/EUvdjEBvyg0Yud\n3ByJi3ldsW2yitUM7fCZ3DaWBAfPgtX6xoOeaFRaoovyIKXZtGtszaDs4ve/XmTc\nltIW7R9RdwKBgQCi1jLfhHx6QxU9qvPVubm4IHQcxVbqRWRg1kg+Rhc5Cg6A1Ch7\nLY3AKC+L3enX2ESf1vgnIfUwIoR2QgiClnRvA5dcPA3syDHgziVO8Obk8VBkfO69\ngh7+iDFxhSrDi5oRxH7ec4DzqLXl9iOw4tERgveYr8O3WV1zaKiAORgPLQKBgQCr\nD3yyS7ns2BvKXNfndQVuavkdkxQtbl5jIVGuogjd5PktrhKf5FoKhNKkjYzjPKvx\nOegW7VMkCn/CCJzjyOFF+lFb5fT5SbvSZMHcKrivUBCH860UcJJC+dOaCwg6kZEa\nYqiHyDeKmUVAEzSvd4yc6Tjh6r2Rtq7P0T1pQnwVjwKBgHbE9F5XASP0j7Ljkueb\nzmMLuZSpSdoL0+YzEDc+6h8mKcSpx4OjBWRUC4in+Bns6WOlihYxX6yr9UuiCuTE\nNBn1OeAQ1HZmYNPkNfxqCI0w1ZxbO9WeUHHaGyiJ3lTwaK3+BJsnS/1MXOvC3Dmf\nlK6is7V5/W0UE98ppDXZFQz1\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
