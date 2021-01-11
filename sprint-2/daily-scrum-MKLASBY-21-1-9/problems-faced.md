# Problems Faced
## Meeting Date: 2021-01-09
## By: Mike Lasby

I had a big issue with the CORS headers on trying to integrate the react and django side of the apps in a tutorial we are following. The problem was resolved by adding `CORS_ORIGIN_ALLOW_ALL = True`. 