<script lang="ts" setup>
/* SERVER STATE MANAGMENT */

/**
 *
 *  Common storage patterns
 * - in a locale scope (components, pages, etc)
 *     - no cache
 * - in a store
 *     - no refresh on regular stores
 * NOT the only issue
 *
 * **/

/**
 *
 * Other issues
 * - STATE related to the fetch (loading, errors, etc)
 * - Request DEDUPLICATIONS
 * - WHEN to refresh the data ?
 *     - On component mount | after a mutation ?
 *     - On windows focus | On reconnection ?
 * - GARBAGE COLLECTING the inactive cache ?
 *
 * **/
</script>

<template>
  <u-alert title="test" type="success" />
</template>

<style scoped></style>
