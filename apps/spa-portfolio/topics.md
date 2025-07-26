# SERVER STATE MANAGMENT

# Common storage patterns

- in a locale scope (components, pages, etc...)
  - no cache
- in a Store (Pinia Store)
  - no Refresh in Regular Stores

# NOT THE ONLY ISSUE

# Other issues

- STATE related to the fetch (loading, errors, etc...)
- Request DEDUPLICATIONS
- WHEN to refresh the data ?
  - On component mount || after a Mutation ?
  - On Windows focus || On Reconnection ?
- GARBAGE COLLECTING the in-active cache ?

# What is a Server State Managment library ?

1. Vue Apollo (ONLY GraphQL)
2. Tanstack Query (EVENYTHING TS/JS (React, Solid, Vue, Svelte, Angular))
3. Pinia Colada (ONLY for VUE) # what ew talking about now

# What is Pinia Colada by Eduardo San Martin Morote ?

- data fetching layer on the top of Pinia
  - a set of stores preconfigured for data fetching and managment ( PINIA NEEDED )
  - minimal: 3.1 KB (minified and gzipped)
  - not stable yet (7 months ago)

# 2 NOTIONS to know

- Queries: FETCH the data
  - Declarative
    - meant to run by the library
  - example:
    ```javascript
    const { data, isPending, error } = useQuery({
      key: ['contacts'], // Key to cache it in store
      query: () => fetch('contacts'),
      staleTime: 15000, // the amount of time during which the query will considered valid
    });
    ```
- Mutations: MUTATE the data
  - Imperative
    - meant to trigger by ourself
  - example:
    ```javascript
    const { mutate, data, error } = useMutation({
      mutation: () => fetch('/contacts', { method: 'PATCH' }),
    });
    ```

# Data Loaders

- RFC and Project created by Eduardo San Martin Morote
- Available in the Unplugin vue router
- designed to solve Suspense Limitations
  - deduplications of requests
  - local fetching and error state
  - cascading loading state
  - No update of params change
  - preloading
