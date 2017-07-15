export default function contains(el, child) {
  if (el == null) { return false }
  return el !== child && el.contains(child)
}
