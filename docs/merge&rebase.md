1. Git Merge
What it does:
git merge combines two branches by creating a new merge commit.
This keeps the history exactly as it happened.

When to use:
When you want to preserve full history (good for teams).
When working with public/shared branches (like main).
When commit history correctness is more important than cleanliness.

Advantages:
Safe — history is never changed.
Reflects the true branching timeline.
Better for large teams.

Disadvantages:
History can become cluttered with many merge commits.
The graph becomes more complex.


2. Git Rebase
What it does:
git rebase moves your entire branch to start on top of another branch.
It rewrites commit history to make it look linear.

When to use:
When you want clean, linear history.
When working on local feature branches not yet pushed.
For keeping feature branches updated in a clean way.

Advantages:
Cleaner, linear history (no merge commits).
Easier to read git log.

Disadvantages:
Rewrites history → dangerous on shared branches.
If used incorrectly, can cause conflicts or overwrite other people's work.