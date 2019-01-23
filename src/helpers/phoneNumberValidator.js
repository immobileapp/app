const validate = number => (
  /\(([0-9]{2})\)([0-9]{5})\-([0-9]{4})/.test(number)
)

export default {
  validate
}
