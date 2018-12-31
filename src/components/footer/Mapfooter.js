import React from 'react';


class Footer extends React.Component{
   

	render() {
		
		return(
	
		     <footer id="footer-copyright" role="contentinfo">
			    Copyright &copy; {(new Date().getFullYear())} - Ramona Saintandre
			 </footer>
		  );
	   }
	}

export default Footer;