import React, { useEffect, useState, useCallback } from "react";
import {
    Box,
    Typography,
    useTheme,
    Card,
    CardMedia,
    CircularProgress,
    TextField,
    IconButton, // New: For the filter icon
    Menu,       // New: For the filter options dropdown
    MenuItem    // New: For individual filter options
} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList'; // New: Filter icon
import { tokens } from "../../theme";
import HeroProjects from "../components/HeroProjects.jsx"; // Adjust path if Projects.jsx is in src/scenes/projects/
import { supabase } from "../../supabaseClient.js";

const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'upcoming', 'in progress', 'completed'

    // State for the filter menu anchor element
    const [anchorEl, setAnchorEl] = useState(null);
    const openFilterMenu = Boolean(anchorEl);

    // Function to open the filter menu
    const handleClickFilter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to close the filter menu
    const handleCloseFilterMenu = () => {
        setAnchorEl(null);
    };

    // Function to handle status selection from the menu
    const handleFilterStatusChange = (status) => {
        setFilterStatus(status);
        handleCloseFilterMenu(); // Close the menu after selection
    };

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        setError(null);

        let query = supabase.from('projects').select('*');

        // Apply status filter
        if (filterStatus && filterStatus !== 'all') {
            query = query.eq('status', filterStatus);
        }

        // Apply search term (case-insensitive partial match in project_name or description)
        if (searchTerm) {
            query = query.or(
                `project_name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`
            );
        }

        // Always order by creation date (newest first)
        query = query.order('created_at', { ascending: false });

        const { data, error } = await query;

        if (error) {
            console.error("Error fetching projects data", error);
            setError("Failed to fetch projects. Please try again.");
        } else {
            console.log("Projects data fetched successfully from Supabase:", data);
            const formattedData = data.map(row => ({ ...row, id: row.id || row.uuid })); 
            setProjects(formattedData);
        }
        setLoading(false);
    }, [filterStatus, searchTerm]); // Re-run fetch when filterStatus or searchTerm changes

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Box >
            <HeroProjects title="Our Projects" subtitle="Explore our recent works and client successes" />

            {/* Search and Filter Controls */}
            <Box m="20px" display="flex" justifyContent="space-between" alignItems="center">
                {/* Search Bar with 30px border-radius */}
                <TextField
                    label="Search Projects"
                    variant="filled"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{
                        flexGrow: 1, // Allow search bar to take available space
                        marginRight: '20px', // Space between search and filter icon
                        '& .MuiInputBase-input': { color: colors.grey[100] },
                        '& .MuiInputLabel-root': { color: '#005197' },
                        '& .MuiFilledInput-root': {
                            backgroundColor: '#d6d6d6',
                            borderRadius: '30px', // <--- Apply border-radius here
                            overflow: 'hidden', // Ensures inner elements conform to border-radius
                        },
                        // If you want to customize the label position or other filled variant specifics
                        '& .MuiFilledInput-input': {
                            padding: '12px 20px 12px 20px', // Adjust padding inside the rounded input
                        },
                        '& .MuiInputLabel-filled': {
                            transform: 'translate(20px, 12px) scale(1)', // Adjust label position for rounded input
                            '&.MuiInputLabel-shrink': {
                                transform: 'translate(20px, -9px) scale(0.75)', // Label shrink position
                            }
                        }
                    }}
                />
                
                {/* Filter Icon */}
                <IconButton
                    aria-label="filter projects"
                    onClick={handleClickFilter}
                    sx={{
                        backgroundColor: '#005197',
                        color: '#d6d6d6',
                        borderRadius: '50%', // Makes it a circle
                        padding: '12px', // Adjust padding to make the icon larger and more clickable
                        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)', // Optional: subtle shadow
                        '&:hover': {
                            backgroundColor: colors.primary[600],
                            transform: 'scale(1.05)', // Subtle hover effect
                        },
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                    }}
                >
                    <FilterListIcon fontSize="large" /> {/* Icon for filter */}
                </IconButton>

                {/* Filter Menu */}
                <Menu
                    id="filter-menu"
                    anchorEl={anchorEl}
                    open={openFilterMenu}
                    onClose={handleCloseFilterMenu}
                    MenuListProps={{
                        'aria-labelledby': 'filter-button', // Associate with the IconButton
                    }}
                >
                    <MenuItem onClick={() => handleFilterStatusChange('all')} selected={filterStatus === 'all'}>All Statuses</MenuItem>
                    <MenuItem onClick={() => handleFilterStatusChange('upcoming')} selected={filterStatus === 'upcoming'}>Upcoming</MenuItem>
                    <MenuItem onClick={() => handleFilterStatusChange('in progress')} selected={filterStatus === 'in progress'}>In Progress</MenuItem>
                    <MenuItem onClick={() => handleFilterStatusChange('completed')} selected={filterStatus === 'completed'}>Completed</MenuItem>
                </Menu>
            </Box>

            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                gap="20px"
                m="40px"
                sx={{
                    "& .MuiCard-root": {
                        backgroundColor: colors.primary[400],
                        borderRadius: "30px",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease-in-out",
                        '&:hover': {
                            transform: "translateY(-5px)",
                        },
                    },
                }}
            >
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh" gridColumn="1 / -1">
                        <CircularProgress size={60} sx={{ color: colors.greenAccent[500] }} />
                        <Typography variant="h4" color={colors.greenAccent[100]} ml={2}>Loading projects...</Typography>
                    </Box>
                ) : error ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh" gridColumn="1 / -1">
                        <Typography variant="h4" color={colors.redAccent[500]}>{error}</Typography>
                    </Box>
                ) : projects.length === 0 ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="50vh" gridColumn="1 / -1">
                        <Typography variant="h4" color={colors.grey[300]}>No projects found matching your criteria.</Typography>
                    </Box>
                ) : (
                    projects.map((project) => (
                        <Card
                            key={project.id}
                            sx={{
                                position: 'relative',
                                height: 300,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                '&:hover .project-overlay': {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                },
                                '&:hover .project-title-area': {
                                    opacity: 0.2,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={project.picture_url || 'https://via.placeholder.com/300x300?text=No+Image'}
                                alt={project.project_name}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                }}
                            />
                            {/* Title & Client Name Overlay (at the bottom) */}
                            <Box
                                className="project-title-area"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 2,
                                    backgroundColor: '#029cc3',
                                    color: 'white',
                                    padding: '10px 15px',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                                    opacity: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    height: 'auto',
                                }}
                            >
                                <Typography variant="h5" fontWeight="bold" sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                                    {project.project_name}
                                </Typography>
                                <Typography variant="body2" sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                                    {project.client_name}
                                </Typography>
                            </Box>

                            {/* Description Overlay (appears on hover) */}
                            <Box
                                className="project-overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0,0,0,0.85)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px',
                                    textAlign: 'center',
                                    opacity: 0,
                                    transform: 'translateY(100%)',
                                    transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
                                    zIndex: 3,
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography variant="h6" gutterBottom>{project.project_name}</Typography>
                                <Typography variant="body2" sx={{ maxHeight: 'calc(100% - 40px)', overflowY: 'auto' }}>
                                    {project.description}
                                </Typography>
                            </Box>
                        </Card>
                    ))
                )}
            </Box>
        </Box>
    );
};

export default Projects;