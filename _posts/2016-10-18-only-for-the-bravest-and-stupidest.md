---
id: 26011
title: 'ONLY FOR THE BRAVEST AND STUPIDEST'
date: 2016-10-18T08:00:00-05:00
author: kevin
layout: post
categories:
  - macro
tags:
  - bonds
  - swaps
  - LTCM
  - negative swap spreads
   
---
<a href="http://themacrotourist.com/images/StupidOct1716.png"><img src="http://themacrotourist.com/images/StupidOct1716.png" alt="http://themacrotourist.com/images/StupidOct1716.png" width="750" height="500" style="margin:30px auto;display:block;"></a>

I know just enough about the swap market to get myself in some serious trouble, but lord knows a lack of knowledge has never stopped me before.  Way back when in a former life, I traded plenty of total return equity index swaps, but they were basically tax games with a little bit of short term funding variables thrown in to spice it up.  

The real swaps market is a gigantic liquid market where banks agree to swap a fixed cash flow for a floating one.  Although all swaps are OTC (over-the-counter) derivatives, there are some standard contracts that are actively traded and have futures market equivalents that hacks like me can trade.

So without further ado, let's dive into a trade I think offers a compelling edge over simply being short US treasuries.  

I am bearish on US treasuries.  The bond market is a enormous bubble that rivals all the great manias.  Don't worry - I know all the arguments refuting my position, but I just don't buy them.  I think we will look back at this period and wonder what the heck we were thinking.  Until then I will just have to live with being a contrarian voice while everyone around me repeats all the reasons inflation and interest rates will never rise.

Shorting the 30 year treasury bond is obviously one way for me to express this view.  And although the US 30 year treasury yield has risen 40 basis points off the recent low levels, it is still an extremely low yield.

<a href="http://themacrotourist.com/images/USGG30YROct1716.png"><img src="http://themacrotourist.com/images/USGG30YROct1716.png" alt="http://themacrotourist.com/images/USGG30YROct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

Sticking on a big negative 30 year bond future short bet is probably the most reliable way to play for higher yields.  

But here is another idea for those that are either a little bit braver or stupider (and most likely a bit of both).  

Swap rates should theoretically trade at yield levels that are *higher* than the equivalent treasury yields.  After all there is a bank in the middle of the OTC derivative contract.  Nothing should trade at a lower rate than the sovereign issuer who has the power to print to satisfy obligations.

<a href="http://themacrotourist.com/images/SpreadsNov1815.png"><img src="http://themacrotourist.com/images/SpreadsNov1815.png" alt="http://themacrotourist.com/images/SpreadsNov1815.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

During the 1990s the infamous hedge fund Long Term Capital Management got into tons of trouble shorting the swap spread, assuming swap rates, which were higher than US treasury rates, would converge lower.  When the 1998 credit crisis hit, swap spreads exploded higher as worries about counter party risk caused investors to bid up risk free treasuries and off load swaps.

Yet during the 2008 credit crisis, much to everyone's surprise, swap spreads collapsed.

<a href="http://themacrotourist.com/images/AllOct1716.png"><img src="http://themacrotourist.com/images/AllOct1716.png" alt="http://themacrotourist.com/images/AllOct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

And then the unthinkable happened.  Swap spreads dipped below zero and actually went negative!  It made no sense and most market pundits thought it would be a temporary phenomenon.   Yet instead of bouncing back, the swap spread has just drifted lower.   

Many market commentators have written about this strange anomaly, but the truth of the matter is that no one can completely explain the reasons behind this apparently illogical pricing.  I have tried with my two pieces "[How many other could never happens are out there?](<http://themacrotourist.com/blog/2015/11/10/nov-1015-how-many-other-could-never-happens-are-out-there/>)" and "[Negative Swap Spreads - time to buy bonds](<http://themacrotourist.com/blog/2015/11/18/nov-1815-negative-swap-spreads-time-to-buy-bonds/>)", but they do not come to any firm conclusions as to the reason for the negative swap rates.

Yet I have a new theory.  I think the main reason for the negative swap rates is shrinking bank balance sheets.  Faced with the myriad of new rules and capital requirements, banks are not as willing to engage in swap transactions.  Although the demand for swaps has probably fallen, the supply has fallen even more.  This has caused this strange pricing paradigm of swap rates trading below risk free US treasury yields.

With the Deutsche Bank concerns and the uncertainty of the upcoming US election, it is no wonder that 30 year swap spreads have sunk to all time lows!  Banks are loathe to expand their balance sheet in this environment.

<a href="http://themacrotourist.com/images/USSP30Oct1716.png"><img src="http://themacrotourist.com/images/USSP30Oct1716.png" alt="http://themacrotourist.com/images/USSP30Oct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

This means that although the 30 year US treasury yield is 2.52%, the equivalent swap is only 1.96%!

<a href="http://themacrotourist.com/images/USSW30Oct1716.png"><img src="http://themacrotourist.com/images/USSW30Oct1716.png" alt="http://themacrotourist.com/images/USSW30Oct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

Swap rates have not backed up nearly as much as treasury yields during the past month.  

I don't have any definite catalyst why the swap spread will return to zero.  It very well might just go even more negative.  Yet I subscribe to the Ben Stein theory of trading - "that which cannot go on forever, doesn't."  At negative 56 basis points the 30 year swap spread is approaching the just plain stupid level.

Like an idiot, I am willing to stand in here and take the other side of this anomaly.  The 56 basis points of pickup is too irresistible.  

So how do you go about putting this trade on?  For real fixed income traders, it is super simple and I have probably just embarrassed myself with this piece.  But for the rest of us, I present the following:

<a href="http://themacrotourist.com/images/CodesOct1716.png"><img src="http://themacrotourist.com/images/CodesOct1716.png" alt="http://themacrotourist.com/images/CodesOct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

The CME has a series of different maturity swap futures contracts.  They are no where near as liquid as the corresponding treasury futures, but the 30 year swap is usually 20 contracts up, 2 ticks wide.  It has more than enough liquidity for anyone who isn't trading thousand lots.  

The key is to realize the 30 year swap futures will not trade the same as the 30 year bond future.  To figure out the duration equivalent position, run the PDH2 function on Bloomberg:

<a href="http://themacrotourist.com/images/HedgeOct1716.png"><img src="http://themacrotourist.com/images/HedgeOct1716.png" alt="http://themacrotourist.com/images/HedgeOct1716.png" width="750" height="460" style="margin:30px auto;display:block;"></a>

If you wanted to be short a 11 lot of long bond futures, instead short 10 of the 30 year swap futures.  

Personally I am also buying some 2s and 5s against short the 30 year swap futures.  In the coming months I expect the curve to steepen, and hopefully swap spreads also work their way back to zero.  I am not sure if I am brave or stupid.  You decide...

Thanks for reading,  
Kevin Muir  
the MacroTourist  









