
# **1. Git Merge**

### **What it does**

`git merge` **combines two branches** by creating a **new merge commit**.
This means the history remains exactly as it happened.

### **When to use**

* When you want to **preserve full history** (recommended for teams).
* When working with **public/shared branches** (e.g., `main`).
* When **historical accuracy** is more important than a tidy timeline.

### **Advantages**

* ✔ **Safe** — history is never rewritten.
* ✔ Shows the **real branching timeline**.
* ✔ Better for **large teams**.

### **Disadvantages**

* ✘ History can become **cluttered** with many merge commits.
* ✘ The commit graph becomes **complex**.

---

# **2. Git Rebase**

### **What it does**

`git rebase` **moves your entire branch** to start on top of another branch.
It **rewrites commit history** to make it look like a straight line (linear).

### **When to use**

* When you want **clean, linear history**.
* When working on **local feature branches** that haven’t been pushed.
* For keeping feature branches updated **without merge commits**.

### **Advantages**

* ✔ **Cleaner, linear history**.
* ✔ Easier to read `git log`.

### **Disadvantages**

* ✘ **Rewrites history** → dangerous on shared branches.
* ✘ Can cause conflicts or overwrite others' work if misused.

---

