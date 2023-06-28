![Informula](https://nimbus-screenshots.s3.amazonaws.com/s/a1b2163db77f2b9ca141a012ab7a0d71.png)

#### Informula is a informative web site powered by [Ergast API](http://ergast.com/mrd/). Here you can find interesting data of circuits, races, seasons and drivers.

# Tools
- [NextJS 13](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io)
- [PostgreSQL](https://www.postgresql.org/)
- [Ergast API](http://ergast.com/mrd/)

# Ergast Database ERD and Ergast Database guide
### [Database Guide](http://ergast.com/docs/f1db_user_guide.txt)
&nbsp;
![ERD](http://ergast.com/images/ergast_db.png)

***

# Functions
## Circuits
&nbsp;
| Function Name | Parameters      | Parameter Type     |
|---------------|-----------------|--------------------|
|**getCircuits**| *circuitsPerPage* | number             |
|               | *currentPage*     | number             |
|               | *circuitCountry?* | string             |
### Output
- **Circuits**: Array of circuits
- **qCircuits**: Number of circuits

&nbsp;

| Function Name        | Parameters | Parameter Type |
|----------------------|------------|----------------|
| **getCircuitsCountries** |            |                |

### Output

- **Countries**: Array of countries that have circuits.

***

## Seasons
&nbsp;
| Function Name     | Parameters     | Parameter Type |
|-------------------|----------------|----------------|
| **getSeasons**    | *seasonsPerPage* | number         |
|                   | *currentPage*    | number         |
|                   | *decade*         | number or null |

### Output

- **Seasons**: Array of Seasons.
- **qSeasons**: Number of Seasons.

***

# Drivers
&nbsp;
| **Function Name** | Parameters      | Parameter Type |
|-------------------|-----------------|----------------|
| **getDrivers**    | *driversPerPage*  | number         |
|                   | *currentPage*     | number         |
|                   | *sortByLetter?*   | string or null |
|                   | *driverForename?* | string or null |
|                   | *driverSurname?*  | string or null |

### Output
- **Drivers**: Array of Drivers.
- **qDrivers**: Number of Drivers.

&nbsp;

| **Function Name**    | Parameters  | Parameter Type         |
|----------------------|-------------|------------------------|
| **getDriverById**    | *driverId*      | number or number[]   |

### Output
- **Driver**: Array of Drivers with his results.

***

# Constructors
&nbsp;
| **Function Name**    | Parameters            | Parameter Type |
|----------------------|-----------------------|----------------|
| **getConstructors**  | *constructorsPerPage*   | number         |
|                      | *currentPage*           | number         |

### Output
- **Teams**: Array of Constructors.
- **qConstructors**: Number of Constructors.

&nbsp;

| **Function Name**        | Parameters        | Parameter Type |
|--------------------------|-------------------|----------------|
| **getConstructorById**   | *constructorId*     | number or number[]|

### Output
- **Team**: A specific constructor given by its ID.
- **Results**: All the race results of the constructor.

&nbsp;

| **Function Name**                                | Parameters                         | Parameter Type       |
|--------------------------------------------------|------------------------------------|----------------------|
| **getConstructorResultsByDriverAndConstructorId** | *constructorId*                      | number[]   |
|                                                  | *driverId*                           | number |

### Output
- **Team**: The results of a driver with the constructor.

***

# Races
&nbsp;
| **Function Name** | Parameters      | Parameter Type |
|-------------------|-----------------|----------------|
| **getRaces**      | *racesPerPage*    | number         |
|                   | *currentPage*     | number         |
|                   | *year*            | number         |

### Output
- **Races**: Array of Races.
- **qRaces**: Number of Races.

&nbsp;

| **Function Name** | Parameters  | Parameter Type  |
|-------------------|-------------|-----------------|
| **getRaceById**   | *raceId*      | number          |

### Output
- **Race**:A specific race with constructors standings, drivers standings and the results of the qualifying and race.

&nbsp;

| **Function Name**      | Parameters       | Parameter Type |
|------------------------|------------------|----------------|
| **getRacesByCircuit**   | *racesPerPage*     | number         |
|                        | *currentPage*      | number         |
|                        | *circuitId*        | number         |

### Output
- **RacesPerCircuit**: Array of races held on the given circuit.
- **qRacesPerCircuit**: Number of races held on the given circuit.

***
# Status
&nbsp;
| **Function Name**  | Parameters  | Parameter Type |
|--------------------|-------------|----------------|
| **getStatusById**  | *statusId*    | number         |


### Output
- **Status**: A specific status given by its ID.






