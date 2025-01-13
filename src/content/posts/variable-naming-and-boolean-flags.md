---
updatedAt: 2023-05-12T00:41:00.000Z
type: note
createdAt: 2021-11-15T22:49:00.000Z
tags:
  - note
excerpt: Option 1 loading selected active visible fetched fetching disabled
  error success showUsers usersLoading | loadingUsers mergeUsersSuccess...
name: Variable naming and boolean flags
cover: null
title: Variable naming and boolean flags

---

## Option 1

```javascript
loading
selected
active
visible
fetched
fetching
disabled

error
success
showUsers
usersLoading | loadingUsers
mergeUsersSuccess
getUsersError | errorGetUsers
mergeable
hoverable
currentOrder
notCurrentOrder
userDisabled | disabledUser

usersVisible
includePrefix | withPrefix
postsCached
fadeOut
vipReservation
```
## Option 2

```javascript
// Pretty straightforward
isLoading
isSelected
isActive
isVisible
isFetched
isFetching
isDisabled
canMerge

// Little trickier
isError | hasError
isSuccess | isSuccessful
shouldShowUsers
usersIsLoading | usersAreLoading | isLoadingUsers
mergeUsersIsSuccess | mergeUsersIsSuccessful | isSuccessMergeUsers | isSuccessfulMergeUsers
getUsersIsError | getUsersHasError | isErrorGetUsers | hasErrorGetUsers
canMerge
canHover
isCurrentOrder
isNotCurrentOrder
isUserDisabled | isDisabledUser

// I dunno... 🤷‍♂️
isUsersVisible | areUsersVisible
shouldIncludePrefix | withPrefix | hasPrefix
isPostsCached | arePostsCached
shouldFadeOut | isFaded | hasFadeOut
hasVipReservation



// Tanstack Query examples
isError
isFetched
isFetchedAfterMount
isFetching
isPaused
isLoading
isLoadingError
isPlaceholderData
isPreviousData
isRefetchError
isRefetching
isInitialLoading
isStale
isSuccess

// react-hook-form examples
shouldValidate
shouldDirty
shouldTouch
```
## What about HTML attributes?

```javascript
loading
// others...
```
## Conclusion

Option 2 sucks. It’s nice for the real simple ones like `isLoading`, but I think it gets awkward pretty fast. While option 1 feels more consistent in more circumstances. And it matches HTML attribute conventions. It wins.

## Links

Naming cheatsheet


