import { writable } from 'svelte/store';
import { Client, createClient, debugExchange, cacheExchange, fetchExchange } from 'urql';
import { browser } from '$app/environment';

const GRAPHQL_ENDPOINT = 'https://clubs.iiit.ac.in/graphql';

// Custom store to manage client instance
const clientStore = writable<Client | undefined>(undefined);

const makeClient = () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    exchanges: [
      debugExchange,
      cacheExchange,
      fetchExchange
    ],
    fetchOptions: () => {
      // const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      // const cookieHeader = cookies.join('; ');

      return {
        cache: "no-store",
        credentials: 'include',
        // headers: {
        //   cookie: cookieHeader
        // }
      };
    }
  });

  // Update store with the created client
  clientStore.set(client);

  return client;
};

export const getClient = () => {
    // Subscribe to the clientStore and get the current value
    let existingClient;
    clientStore.subscribe(value => {
      existingClient = value;
    });
  
    // Check if client is already created, if not, create one
    if (existingClient) {
      return existingClient;
    } else {
      return makeClient();
    }
  };