function printOwing(invoice) {
  printBanner()
  const outstanding = calculateOutstanding()
  printDetails()

  function printDetails() {
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
  }
}
