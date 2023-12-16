import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewsItem = (props) => {

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  



  // render() {
  let { title, description, imageUrl, newsURL, author, date, channel } = props
  return (
    <div class="card mb-3 eachCard" style={{}}>
      <span class="badge text-bg-dark" style={{ "width": "8%", "right": " 1%", "position": "absolute", "bottom": "3%" }}>{channel.slice(0, 13)}{channel.length > 13 ? "..." : ""}</span>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/04/69/55/05/360_F_469550598_GGPjgmPNMycMzhDBIOuTPXyC0j29nETY.jpg"} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}...</h5>
            <p class="card-text">{description}...</p>
            <Button onClick={handleOpen}><a style={{ "backgroundColor": " #E5A347", "border": " none", "color": "#111", "fontWeight": " 600" }} target="_blank" className="btn btn-sm btn-primary readMoreBtnDesign">Read More</a></Button>
            <p class="card-text"><small class="text-muted"><span className="authorName">{author}</span> <br /> {new Date(date).toGMTString()}</small></p>

          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <iframe src={newsURL} width="100%" height= "100%"></iframe>
        </Box>
      </Modal>
    </div>
  )
  // }
}

export default NewsItem