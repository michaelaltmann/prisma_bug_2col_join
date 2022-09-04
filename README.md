# prisma_bug_2col_join

This repository demonstrates a bug with (prisma)[https://www.prisma.io] when a count is performed
on a two level join, with a two column join and the lower level, in SqlServer.

```
git clone git@github.com:michaelaltmann/prisma_bug_2col_join.git
yarn install
npx prisma db push
node main.js
```
