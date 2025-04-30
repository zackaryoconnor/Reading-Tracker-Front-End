// FILE PURPOSE:
// This component renders a static "Staff Picks" page showing what each team member is currently reading.
// It will be linked from the homepage and added as a new route by the frontend team.

// 1. Import dependencies
import "./StaffPicks.css";

// 2. Define the component
function StaffPicks() {
// 3. Return some JSX
  return (
    <div className="staff-picks-page">
      <h1>📚 Staff Picks</h1>
      <p>Check out what the developers behind this app are loving right now:</p>

      <ul>
        <li><strong>Alex Jungers</strong> — <em>The Obstacle Is the Way</em> by Ryan Holiday</li>
        <li><strong>Christian Vieux</strong> — <em>Atomic Habits</em> by James Clear</li>
        <li><strong>Diana Wilson</strong> — <em>The Midnight Library</em> by Matt Haig</li>
        <li><strong>Zackary O'Connor</strong> — <em>Can't Hurt Me</em> by David Goggins</li>
      </ul>
    </div>
  );
}

// 4. Export the component
export default StaffPicks;



// notes for alex and teammates:
// <strong> turns the text to BOLD and 
// <em> or emphasis renders the text in italics

// To be completed: Style the page following the standard the frontend has put in place
// To be completed: Update the reading material & author if teammates wish to feature a different book