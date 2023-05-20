import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CustomSelectBox = ({ value, onChange, onClear, label, options }) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={onChange}
                sx={{
                    "& .MuiSelect-iconOutlined": { display: value ? "none" : "" },
                    "&.Mui-focused .MuiIconButton-root": { color: "primary.main" },
                }}
                endAdornment={
                    <IconButton
                        sx={{ visibility: value ? "visible" : "hidden" }}
                        onClick={onClear}
                        size="small"
                    >
                        <CloseIcon />
                    </IconButton>
                }
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelectBox;
