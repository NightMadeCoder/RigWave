import { Account, Avatars, Client, Databases, Storage, } from 'appwrite';



export const appwriteConfig ={
    projectid: import.meta.env.VITE_APPWRITE_PROJECT_ID,
   url: import.meta.env.VITE_APPWRITE_URL,
   datebaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
   storage: import.meta.env.VITE_APPWRITE_STORAGE_ID,
   userCollections: import.meta.env.VITE_APPWRITE_USER_COLLECTIONS_ID,
   postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
   savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectid);
client.setEndpoint(appwriteConfig.url);


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
