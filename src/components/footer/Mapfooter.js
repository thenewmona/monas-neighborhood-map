import React from 'react';


class Footer extends React.Component{
   

	render() {
		
		return(
	
		     <footer id="footer-copyright" role="contentinfo">
			    Copyright &copy; {(new Date().getFullYear())} - Ramona Saintandre
				 View <span>Project</span> project <a href="https://github.com/thenewmona/monas-neighborhood-map.git"></a>
				 {/* https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md */}
			 </footer>
		  );
	   }
	}

export default Footer;