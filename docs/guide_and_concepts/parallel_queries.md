---
sidebar_position: 5
title: 쿼리 다중호출(Parallel Queries)
---

# 쿼리 다중호출 (병렬 쿼리)

**병렬** 쿼리는 여러개(어쩌면 한번에) 보내는 쿼리들입니다. 동시성을 추구한다고 볼 수 있습니다.

## 수동으로 쿼리 병렬 호출하기

만약 각각의 쿼리들이 변하지 않는 쿼리라면, 여러개를 동시에 호출할 때 별 문제 없습니다. 그냥 `useQuery`나 `useInfiniteQuery` 훅을 여러번 쓰세요.

```tsx
function App () {
// 아래 3개 쿼리들은 병렬로 실행될 것
  const usersQuery = useQuery('users', fetchUsers)
  const teamsQuery = useQuery('teams', fetchTeams)
  const projectsQuery = useQuery('projects', fetchProjects)
  ...
}
```

:::caution
지연(Suspend) 모드에서 리액트 쿼리를 활용할 때, 이런 패턴의 병렬 호출은 동작하지 않습니다. 첫번째 쿼리가 에러를 던지는 순간 다음 쿼리들은 지연되거든요.

올바르게 동작되게 하려면, 저희가 제공하는 `useQueries` 훅을 쓰던가 저 쿼리들을 묶어서 하나의 컴포넌트로 만드세요. (which is lame → 🤔?)
:::

## **`useQueries` 를 활용하여 동적으로 병렬 쿼리하기**

만약에 호출하려는 쿼리 인스턴스들이 렌더링할 때마다 변경된다면 위에서 언급한 방식을 사용할 수 없어요. 훅 규칙에 어긋나거든요. 이를 위해 리액트 쿼리에서는 `useQueries` 훅을 제공합니다. 여러 쿼리를 동적으로 실행시킬 수 있어요.

:::tip Hook 규칙

**반복문**, **조건문** 혹은 **중첩된 함수** 내에서 Hook을 호출하지 마세요.

위에서 3개의 useQuery가 호출되었고, 그 중 가장 위의 훅이 reject되어 아래 훅들은 호출되지 못했습니다.
이렇게 되면 훅이 조건부로 호출된 것이고, 이는 훅 규칙에 어긋납니다.

:::

`useQueries` 는 쿼리 옵션 객체를 배열로 받습니다. 그리고 쿼리 결과의 객체를 반환해요.

```tsx
function App({ users }) {
    const userQueries = useQueries(
        users.map((user) => {
            return {
                queryKey: ['user', user.id],
                queryFn: () => fetchUserById(user.id),
            };
        }),
    );
}
```
