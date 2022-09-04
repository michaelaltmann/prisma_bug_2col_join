const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ log: ["query", "warn", "error"] })

async function main() {

  console.log('Sanity check 1: This works')
  await prisma.post.findMany({ where: { author_id: "1", author_country: "USA" } })

  console.log('Sanity check 2: This works')
  await prisma.post.count({ where: { author_id: "1", author_country: "USA" } })

  console.log('Sanity check 3: This works')
  await prisma.post.count({ where: { author: { id: "1", country_id: "USA" } } })

  console.log('Sanity check 4: This works')
  await prisma.post.findMany({ where: { author: { is: { country: { id: "USA" } } } } })

  console.log('Bug: this fails with SqlServer, but not with SQLite')
  await prisma.post.count({ where: { author: { is: { country: { id: "USA" } } } } })

  console.log("It would be great if you made it to here!")
}

(async () => {
  await main()
})()