
import PropTypes from "prop-types";

function TodoFilters({
    search,
    setSearch,
    filterCategory,
    setFilterCategory,
    filterStatus,
    setFilterStatus,
    categories
}) {
    return (
        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyle}
            />

            <div style={{ display: "flex", gap: "10px" }}>
                {/* Category Filter */}
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    style={selectStyle}
                >
                    <option value="All">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Status Filter */}
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    style={selectStyle}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box"
};

const selectStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    flex: 1
};

TodoFilters.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    filterCategory: PropTypes.string.isRequired,
    setFilterCategory: PropTypes.func.isRequired,
    filterStatus: PropTypes.string.isRequired,
    setFilterStatus: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoFilters;
