function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function unfollowUsers() {
  // Select all buttons that match the 'Unfollow' button
  const unfollowButtons = document.querySelectorAll('div[data-testid="unfollow"]');

  // Loop through the list of unfollow buttons(loops)
  for (let i = 0; i < unfollowButtons.length; i++) {
    // After every 5 unfollows, wait for an hour to avoid 'bot'activity signals😂.
    if (i % 5 === 0 && i !== 0) {
      console.log('Waiting for an hour before unfollowing more users...');
      await sleep(3600 * 1000); // Wait for 1 hour (3600 seconds)
    }

    // Simulate a click on the unfollow button
    unfollowButtons[i].click();
    console.log(`Unfollowed user ${i + 1}`);

    // Wait for a few seconds between each unfollow to mimic human behavior
    await sleep(5000); // Wait for 5 seconds
  }

  console.log('All selected users have been unfollowed.');
}
