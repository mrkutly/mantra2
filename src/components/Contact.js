import React from "react"
import styled from "styled-components"

const Contact = () => {
	return (
		<ContactContainer>
			<h3>
				For booking, contact Al Cerulo at{" "}
				<Email href="mailto:al@mantrapercussion.org">
					al@mantrapercussion.org
				</Email>
			</h3>
			<h3>
				For any other inquiries, reach out to us at{" "}
				<Email href="mailto:info@mantrapercussion.org">
					info@mantrapercussion.org
				</Email>
			</h3>
		</ContactContainer>
	)
}

const ContactContainer = styled.div`
	text-align: center;
	margin: 25vh auto;
	max-width: 1300px;
`

export const Email = styled.a`
	text-decoration: underline;

	:hover {
		color: rgb(8, 189, 104);
	}
`

export default Contact
