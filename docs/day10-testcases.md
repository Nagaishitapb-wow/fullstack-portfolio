# Mini Recipe Finder — Manual Test Cases

### Test Case 1: Search Valid Recipe
**Input:** "pasta"  
**Expected Result:** Shows list of pasta recipes  
**Actual Result:** ✔ Works  
**Notes:** Data loads successfully.

---

### Test Case 2: Empty Search
**Input:** ""  
**Expected Result:** Error: "Please enter a search term."  
**Actual Result:** ✔ Works

---

### Test Case 3: Nonsense Word
**Input:** "asdasdasd"  
**Expected Result:** "No recipes found"  
**Actual Result:** ✔ Works

---

### Test Case 4: API Fail Simulation
Turn off internet / block API  
**Expected:** "Something went wrong!"  
**Actual:** ✔ Works

---

# Bug Fixes
1. Fixed empty input not showing error  
2. Added proper loading indicator  
3. Fixed recipe list not clearing after new search
