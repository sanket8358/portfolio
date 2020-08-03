/*
	Listen to navigation links
		- Toggle active link 
		- Toggle clicked link
		- Collapses nav bar 
		*/
		$('.nav-link').on('click', function (evt) {
			$('.nav-link.active').toggleClass('active');
			$(this).toggleClass('active');
			$('.navbar-collapse').collapse('hide');
		});

/*
	Rating data
	*/
	const getRatingData = () => {
		return {
			"frontend": 
			[
				{
					"name": "angular" ,
					"displayName": "Angular 6+",
					"rating": 6
				},
				{
					"name": "html5",
					"displayName": "HTML5",
					"rating": 8
				},
				{
					"name": "css",
					"displayName": "CSS",
					"rating": 8
				},		
				{
					"name": "javascript",
					"displayName": "JavaScript",
					"rating": 7
				}			
			],
			"backend": [
				{
					"name": "java",
					"displayName": "Java 8",
					"rating": 7
				},
				{
					"name": "sql" ,
					"displayName": "PL/SQL",
					"rating": 7
				},
				{
					"name": "spring" ,
					"displayName": "Spring boot",
					"rating": 8
				},
				{
					"name": "hibernate" ,
					"displayName": "Hibernate",
					"rating": 7
				}
			],
			"tools":
			[
				{
					"name": "git" ,
					"displayName": "Git",
					"rating": 8
				},
				{
					"name": "linux" ,
					"displayName": "Linux",
					"rating": 6
				},
				{
					"name": "tomcat" ,
					"displayName": "Tomcat",
					"rating": 6
				},
				{
					"name": "weblogic" ,
					"displayName": "Oracle Weblogic Server",
					"rating": 6
				}
			],
			"arch":
			[
				{
					"name": "soa" ,
					"displayName": "Service Oriented Architecture",
					"rating": 8
				},
				{
					"name": "microservices" ,
					"displayName": "Microservices",
					"rating": 7
				},
				{
					"name": "ddd" ,
					"displayName": "Domain Driven Design",
					"rating": 7
				},
				{
					"name": "tdd" ,
					"displayName": "Test Driven Development",
					"rating": 8
				}
			]
		};
	};

	const ratingValue = (value) => {
		switch(value){
			case 1:
				return 'Beginner';
			case 2:
				return 'Beginner';
			case 3:
				return 'Beginner';
			case 4:
				return 'Intermediate';
			case 5:
				return 'Intermediate';
			case 6:
				return 'Intermediate';
			case 7:
				return 'Intermediate';
			case 8:
				return 'Advanced';
			case 9:
				return 'Advanced';
			case 10:
				return 'Advanced';
			default:
				return 'Beginner';										
		}
	};

	const createSelectLabel = (name) => {	
		let selectLabel = document.createElement("label");		
		selectLabel.innerHTML = name;
		return selectLabel;
	};
	const createSelect = (target) => {	
		let selectRating = document.createElement("select");
		selectRating.id = target + "Select";

		for (let i=1;i<=10;i++) {
			let option = document.createElement("option");
			option.value = i;
			option.text = i;
			selectRating.appendChild(option);
		}
		return selectRating;
	};

	const renderRating = (target, items) => {	
		const container = document.getElementById(target);

		let selectArray = [];
		for (let item of items) {
			const selectRating = createSelect(target + item.name);			
			const selectLabel = createSelectLabel(item.displayName);	
			container.appendChild(selectLabel);	
			container.appendChild(selectRating);	
			selectRating.value = item.rating;
			selectArray.push({'id': selectRating.id, 'data': item});		
		}

		for(let selectItem of selectArray){
			$('#'+selectItem.id).barrating({theme:'bars-1to10', readonly:true, intialRating: selectItem.data.rating});
		}


	};

	const renderTecnologiesRating = () => {
		const ratingData = getRatingData();
	/*
		render frontend rating
		*/
		renderRating('frontendRating', ratingData['frontend']);
	/*
		render backend rating
		*/
		renderRating('backendRating', ratingData['backend']);
	/*
		render tools rating
		*/
		renderRating('toolsRating', ratingData['tools']);
		/*
		render architectures rating
		*/
		renderRating('archRating', ratingData['arch']);
	};

/*
	On document load it 
	 - renders rating
	 */
	 $(document).ready(function() {
	 	renderTecnologiesRating();      
	 });