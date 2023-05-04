function loadXML(xmlDoc, xslDoc, divClass) {

	fetch("./src/docs/"+xmlDoc)
		.then(response => response.text())
		.then(data => {
			const parser = new DOMParser();
			const xml = parser.parseFromString(data, "application/xml");

			fetch("./src/docs/"+xslDoc)
				.then(response => response.text())
				.then(data => {
					const parser2 = new DOMParser();
					const xsl = parser2.parseFromString(data, "application/xml");

					xsltProcessor = new XSLTProcessor();
					xsltProcessor.importStylesheet(xsl);
					resultDocument = xsltProcessor.transformToFragment(xml, document);
					document.getElementsByClassName(divClass)[0].appendChild(resultDocument);
				})
		})
		.catch(console.error);
}