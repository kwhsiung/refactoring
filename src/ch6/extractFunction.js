function printOwing(invoice) {
  printBanner()
  const outstanding = calculateOutstanding()

  // print details
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
}
