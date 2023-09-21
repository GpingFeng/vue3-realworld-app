// input: errors: Record<string, string[]>
// output: string[]
// eg: {name: ['name is required'], email: ['email is required']}
// => ['name: name is required', 'email: email is required']
export function formatError(errors: Record<string, string[]>): string[] {
  const result: string[] = []

  for (const key in errors) {
    errors[key].forEach((element: string) => {
      result.push(`${key}:${element}`)
    })
  }

  return result
}

export function formatDate(date: string): string {
  // result: eg: January 1, 2021
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
