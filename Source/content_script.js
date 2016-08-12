walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
    
    var upperAlts = ["Jorb", "Jaerb", "Jorearb"];
    var lowerAlts = ["jorb", "jaerb", "jorearb"];

	v = v.replace(/\bJob\b/g, upperAlts[Math.floor(Math.random()*3)]);
	v = v.replace(/\bjob\b/g, lowerAlts[Math.floor(Math.random()*3)]);
    v = v.replace(/\bJobs\b/g, upperAlts[Math.floor(Math.random()*3)].concat("s"));
	v = v.replace(/\bjobs\b/g, lowerAlts[Math.floor(Math.random()*3)].concat("s"));
	
	textNode.nodeValue = v;
}


