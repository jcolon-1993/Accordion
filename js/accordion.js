/*
A jQuery collection is created to hold elements
whose class attribute has a value of accordion.

An event listener waits for the user to click on one
of the buttons whose class attribute has a value of
accordion-control. This runs an anonymous function

*/
$(".accordion").on("click", ".accordion-control", function(e)
{
  // Prevent default action button
  e.preventDefault();
  // get the element the user clicked on
  $(this)
  // Select following panel
  .next(".accordion-panel")
  // If it is not currently animating
  .not(":animated")
  // Use slide toggle to show or hide it
  .slideToggle();
});
