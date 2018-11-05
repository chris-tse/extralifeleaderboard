# Extra-Life Donation Leaderboard

In the spirit of the Extra-Life Game Day to raise money for the Children's Miracle Network, we decided to create a leaderboard to easily view the donations of a particular team and allowing you to search for a donor by name or amount.

## Usage

By default, the page will display the data for our local team, "Sooner Extra Life."

Team data for any team can also be viewed by entering it as a query parameter:
```
https://extralifeleaderboard.netlify.com?team=<teamID>
```

A team's ID can be found on the Extra-Life website by navigating to the team's website and checking the URL:
```
https://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=<teamID>
```

## Todo

* Move search bar component below the title and total
* Add a way to dynamically change the team ID