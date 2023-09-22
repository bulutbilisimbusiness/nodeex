SELECT *
FROM Customer 
WHERE Country like 'USA';

SELECT *
FROM Customer 
WHERE Address like '627 Broadway';

SELECT *
FROM Customer 
WHERE Address like '1498%';

SELECT *
FROM Customer 
WHERE Address like '%1498%';

SELECT *
FROM Customer 
WHERE Address like '%langer';

SELECT *
FROM Customer 
WHERE Address like '%rue%';

SELECT *
FROM Customer 
WHERE Phone like '_55 %';

SELECT *
FROM Customer 
WHERE Address like '_a_%';

SELECT *
FROM Customer 
WHERE Phone like '+__ 030%';

SELECT *
FROM Customer 
WHERE Phone like '+__ 030%' AND FirstName='Hannah';

SELECT * 
FROM Customer
ORDER BY Country ASC;

SELECT * 
FROM Customer
ORDER BY Country DESC;


SELECt *
FROM Customer
ORDER BY Country ASC,City ASC, LastName ASC;

SELECt *
FROM Customer
ORDER BY Country DESC,City DESC, LastName DESC;

SELECT *
FROM Customer
WHERE Country IN('USA','Brazil') 
	AND CustomerId >12 
	AND Company NOT NULL 
ORDER BY Company ASC;

-- *LIMIT- belli sayıda kayıt getirir.

SELECT *
FROM Customer
LIMIT 0,10;

SELECT *
FROM Customer
LIMIT 5;

SELECt *
FROM Customer
LIMIT 10,5;

SELECt *
FROM Customer
ORDER BY LastName ASC,
	FirstName DESC LIMIT 0,5;	

SELECt *
FROM Customer
ORDER BY LastName ASC,
	FirstName DESC
LIMIT 5,5;	

SELECT *
FROM Album
WHERE ArtistId=(SELECT ArtistId
	FROM Artist
	WHERE Name='Led Zeppeli');
	
SELECT AlbumId,Title,
(SELECT Name FROM Artist WHERE ArtistId=a.ArtistId)
		AS Artist
		FROM Album AS a;
		
SELECT FirstName,LastName
FROM (
			SELECT*
			FROM Customer
			WHERE Country='USA'
				AND CustomerId > 22
	)WHERE FirstName like '%a%';
	
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC ,AlbumId ASC;

SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total AS InvoiceTotal
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId;

SELECT t.Name Sarki,a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreId=t.GenreId;

SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC ,AlbumId ASC;

SELECT count(*) AS kayitSayisi from Customer;

SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer;
SELECT COUNT(CustomerId) AS kayitSAyisi FROM Customer 
WHERE Country IN('USA','Brazil','Denmark');

SELECT SUM(Total) AS toplam FROM Invoice;

SELECT SUM(Total) AS toplam,BillingCountry 
FROM Invoice
WHERE BillingCountry='USA';

SELECT count(InvoiceId) AS adet, SUM(Total) AS toplam FROM Invoice;

SELECT AVG(Total) as ortalama FROM Invoice;

SELECT ROUND(AVG(Total)) AS ortalama FROM Invoice;
SELECT ROUND(AVG(Total),3) AS ortalama FROM Invoice;

SELECT MIN(Total) as minimum FROM Invoice;
SELECT MAX(Total) as maximum FROM Invoice;

SELECT MIN(FirstName)as isim from Customer;

SELECT length(BillingAddress) AS uzunluk FROM Invoice;

SELECT count(*) AS kayitSayisi,Country from Customer GROUP BY Country ;

SELECT BillingCountry, count(InvoiceId) AS faturaSayisi 
FROM Invoice GROUP BY BillingCountry;

SELECT BillingCountry, 
	count(InvoiceId)as faturaSayisi,
	sum(InvoiceId) AS toplam 
FROM Invoice 
GROUP BY BillingCountry;

SELECT BillingCountry, 
	count(InvoiceId)as faturaSayisi,
	AVG(InvoiceId) AS ortalama 
FROM Invoice 
GROUP BY BillingCountry;

SELECT BillingCountry, 
	count(InvoiceId)as faturaSayisi,
	ROUND(AVG(InvoiceId),2) AS ortalama 
FROM Invoice 
GROUP BY BillingCountry;

SELECT BillingCountry, 
	count(InvoiceId)as faturaSayisi,
	Min(Total) AS minimum 
FROM Invoice 
GROUP BY BillingCountry;

SELECT BillingCountry, 
	count(InvoiceId)as faturaSayisi,
	sum(InvoiceId) AS toplam,
	Min(Total) AS minimum, 
	MAX(Total) AS maximum ,
	ROUND(AVG(Total),2) AS ortalama
FROM Invoice 
GROUP BY BillingCountry;