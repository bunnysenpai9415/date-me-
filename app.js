// add event listener yes button
document.getElementById('yes-button').addEventListener('click', () => {
    alert('I love You Too!!');
})

const untouchableButton = document.getElementById('my-btn')
const thresholdValue = 10

untouchableButton.addEventListener('click', () => {
  alert('I see you use tabs, nice try 😜')
})

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
	
  const buttonBox = untouchableButton.getBoundingClientRect()
	
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
	
  const horizontalOffset = buttonBox.width / 2 + thresholdValue
  const verticalOffset = buttonBox.height / 2 + thresholdValue
	
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
  }
})

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = untouchableButton.getBoundingClientRect()

  if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - thresholdValue
  }
  if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + thresholdValue
  }
  if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - thresholdValue
  }
  if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + thresholdValue
  }

  untouchableButton.style.left = `${left}px`
  untouchableButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}