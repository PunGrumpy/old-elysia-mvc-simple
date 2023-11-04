const logging = (message: string, title: string) => {
  const boxWidth = Math.max(message.length, title.length) + 4
  const border = '─'.repeat(boxWidth)

  const centerPad = (text: string) => {
    const padding = ' '.repeat((boxWidth - text.length) / 2)
    return `${padding}${text}${padding}`
  }

  console.log(`
    ┌${border}┐
    │${centerPad('')} │
    │${centerPad(title)}│
    │${centerPad('')} │
    │${centerPad(message)}│
    │${centerPad('')} │
    └${border}┘
    `)
}

export { logging }
