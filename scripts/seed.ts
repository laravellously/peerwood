export default async () => {
  try {
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )
    await Promise.all([
      console.log("Seeding...")
    ])
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
