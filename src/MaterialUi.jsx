import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
export default function MaterialUi() {
  function handleClick() {
    console.log("the output value is: ", 20 + 5);
  }
  return (
    <>
      <h1>Material Ui Demo</h1>
      <Button variant="contained" color='success' onClick={handleClick}>Click me</Button>&nbsp;&nbsp;
      <Button size='large' variant="contained" disabled onClick={handleClick}>Click me</Button>&nbsp;&nbsp;
      <Button
        variant="contained"
        color='secondary'
        onClick={handleClick}
        size='medium'
        startIcon={<DeleteIcon />} >Delete Me</Button><br /><br />
        <Alert severity="error">Delete option also given.</Alert>
    </>
  )
}